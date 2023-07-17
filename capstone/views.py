import json
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.core import serializers
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import requires_csrf_token


from .models import User, Sites, Categories, Favorites
#import React, { component } from 'react'



def index(request):
    return render(request, "capstone/index.html")

def places(request):
    return render(request, "capstone/mapPlaces.html")

def sites(request, site):
    print(site)
    print(request)
    #if site == "ancient-rome":
# check to see if 'site' is in category list. if so, print out all sites with that category.
# if not in category list, check to see if it is a 'title' and print that out.
# make header one or the other.

    sites = Sites.objects.filter(
        sites_category__cat_name=site)

    #return HttpResponse({"sites": sites})
    #return JsonResponse(sites, safe=False)
    return JsonResponse([site.serialize() for site in sites], safe=False)
    catno = Categories.objects.get(cat_name = sitenm)
    print(catno)
    if catno is None:
        sitenm = Sites.objects.filter(sites_category = site)
        print(sitenm)
        #sites = Sites.objects.all()
    #elif profile == "following":
        # determine who user is following and get their posts to display
        #reqUsernm = request.user.username
        #try:
            #usernm = User.objects.get(username__exact=reqUsernm)
    if site.DoesNotExist:
            #return JsonResponse({"Error": "User not found"})
        #followedNms = Follow.objects.filter(
            #follower=usernm, is_active=True).values_list('followed')
        #posts = Posto.objects.filter(poster__id__in=followedNms)
    #else:
        # get posts posted by chosen username
        #try:
        sitepl = Sites.objects.filter(title = site)
            #list = User.objects.get(username__exact=profile)
        if sitepl is not None:
        #sponse({"Error": "site not found"})
        #posts = Posto.objects.filter(poster__exact=list.id)
    #return JsonResponse([post.serialize() for post in posts], safe=False)
            return JsonResponse([site.serialize() for site in sites], safe=False)


@requires_csrf_token
def updateRecord(request, site_id):
    print(request)
    current_user_id = request.user.id
    print(current_user_id)
    #name = title
    # check if record exists. if not, create new one
    newRecord = False
    activity = ""

    # query for requested profile to follow
    try:
        favsite = Sites.objects.get(id__exact=site_id)
    except Sites.DoesNotExist:
        # requested profile to follow does not exist
        print("site does not exist")
        return JsonResponse({"Error": "Error. Site not found."}, status=404)
    print(favsite)
    print(favsite.id)
    # query for follower's record
    follower = request.user.username
    print(follower)
    try:
        folName = User.objects.get(id__exact=current_user_id)
    except User.DoesNotExist:
        # follower's record not found
        print("user does not exist")
        return JsonResponse({"Error": "Error. User not found."}, status=404)

    # find out if favorites record already exists. If not, create it
    try:
        favorite = Favorites.objects.get(
            watcher__exact=folName, item__exact=favsite)
    except Favorites.DoesNotExist:
        # record not found so create record
        #newRecord = True
        #activity = True
        print("got to look for favorites record")
        favorites = Favorites(watcher=folName,
                        item=favsite, is_active=True)
        favorite.save()
        return JsonResponse({"is_active": True})

    if request.method == "PUT":
        print("got to PUT")
        data = json.loads(request.body)
        favorite.is_active = data["is_active"]
        activity = favorite.is_active
        favorite.save()
        return JsonResponse({"is_active": activity})
    activity = favorite.is_active
    return JsonResponse({"activity": activity})


def favorites(request):
    print(request)
    user_id = request.user.id
    print(user_id)

    favorites = Favorites.objects.filter(
        watcher=user_id, is_active=True)
    print(favorites)

    #return HttpResponse({"sites": sites})
    #return JsonResponse(sites, safe=False)
    #return JsonResponse([favorites.serialize() for favorite in favorites], safe=False)

    return render(request, "capstone/favorites.html favorites")

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
            #return render(request, "capstone/form.html", {
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
