import json
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.core import serializers
from django.contrib import messages
from django.views.decorators.csrf import requires_csrf_token


from .models import User, Sites, Categories, Favorites

def index(request):
    return render(request, "capstone/index.html")

def places(request):
    return render(request, "capstone/mapPlaces.html")

def quiz(request):
    return render(request, "capstone/quiz.html")

def sites(request, site):
    if site == "favorites":
         # get signed-in user's id
        wat_user = request.user.id

        # get all items on signed-in user's favorites list
        sites = Favorites.objects.filter(
            watcher=wat_user, is_active=True)

        return render(request, "capstone/favorites.html", {
            "sites": sites})
    else:
        sites = Sites.objects.filter(
            sites_category__cat_name=site)
        return JsonResponse([site.serialize() for site in sites], safe=False)


@requires_csrf_token
def updateRecord(request, site_id):
    print("got to updateRecord")
    data = json.loads(request.body)
    activity = data["is_active"]
    print(activity)
    current_user_id = request.user.id
    print(current_user_id)
    newRecord = ""

    # query for requested site for favorites
    try:
        favsite = Sites.objects.get(id__exact=site_id)
    except Sites.DoesNotExist:
        # requested site does not exist
        print("site does not exist")
        return JsonResponse({"Error": "Error. Site not found."}, status=404)
    print(favsite.id)

    # query for user's record
    watcher = request.user.username
    print(watcher)
    try:
        folName = User.objects.get(id__exact=current_user_id)
    except User.DoesNotExist:
        # user's record not found
        print("user does not exist")
        return JsonResponse({"Error": "Error. User not found."}, status=404)

    # find out if favorites record already exists. If not, create it if activity is true
    try:
        favorite = Favorites.objects.get(
            watcher__exact=folName, item__exact=favsite)
    except Favorites.DoesNotExist:
    # record not found so create record
        if activity == True:
            print("got to look for favorites record")
            favorites = Favorites(watcher=folName,
                    item=favsite, is_active=True)
            favorites.save()
            return JsonResponse({"is_active": True, "newRecord": True})

    if request.method == "PUT":
        print("got to PUT")
        data = json.loads(request.body)
        favorite.is_active = data["is_active"]
        activity = favorite.is_active
        favorite.save()
        return JsonResponse({"is_active": activity})
    activity = favorite.is_active
    return JsonResponse({"activity": activity})

 # check if listing already on watchlist, post warning message
    #if Watchlist.objects.filter(watcher=u_w, item=listing_id, is_active=True).exists():
        #messages.add_message(
            #request, messages.WARNING, "Listing is already on Watchlist")
    #else:
         # if not already on watchlist, save to watchlist and send success message
        #Watchlist.objects.create(
            #watcher=u_w, item=lists, is_active=True)
        #messages.add_message(
            #request, messages.SUCCESS, "Listing is now on Watchlist")
        # display watchlist
        #return HttpResponseRedirect(reverse('watch_list'))

#def fav(request):
    #print(request)
    #user_id = request.user.id
    #print(user_id)

    #favs = Favorites.objects.filter(
       # watcher=user_id, is_active=True).values()
    #print(favs)
    #cats = Categories.objects.filter(list_cat__exact=id)
    #for cat in cats:
        #cat_list = cat.cat_name
    #for fav in favs:
        #fav_list = fav.item
    #print(favs[1])

    #favorites = Sites.objects.filter(
        #id=favs.item_id).values()
    #print(favorites)

    #return render(request, "capstone/favorites.html", {
        #"favorites": favorites})


def favorites(request):
    print(request)
    # get signed-in user's id
    wat_user = request.user.id
    # get all items on signed-in user's favorites list
    wat_lists = Favorites.objects.filter(
        watcher=wat_user, is_active=True).select_related('item').order_by('item')
    # display user's favorites list
    return render(request, "capstone/favorites.html", {
        "favorites": wat_lists})

#def htmlfavorites(request):
    #print(request)
    # get signed-in user's id
    #wat_user = request.user.id
    #print(wat_user)
    # get all items on signed-in user's favorites list
    #wat_lists = Favorites.objects.filter(
       #watcher=wat_user, is_active=True).select_related('item').order_by('item')
    # display user's favorites list
    #return render(request, 'capstone/favorites.html', {
        #'favorites': wat_lists
    #})


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "capstone/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "capstone/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "capstone/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "capstone/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "capstone/register.html")
