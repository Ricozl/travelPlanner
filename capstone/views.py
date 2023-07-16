import json
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.core import serializers
from django.contrib import messages

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

def favorites(request, name):
    # update a specific site in database (title, is_active)
    # query for requested post
    print(request)
    try:
        site = Sites.objects.get(title=name)
    except Sites.DoesNotExist:
        return JsonResponse({"Error": "site not found"}, status=404)

    if request.method == "PUT":
        data = json.loads(request.body)
        activity = data.get("is_active")
        print(activity)
        try:
            favorite = Favorites.objects.get(item=name)
        except Favorites.DoesNotExist:
            favorite.item = name,
            favorite.is_active = activity
            favorite.save()
            return JsonResponse(favorite.serialize(), safe=False)

        favorite.is_active = activity
        post.save()
    return JsonResponse(post.serialize(), safe=False)

def checkRecord(request, name):
    # check if record exists. if not, create new one
    newRecord = False
    activity = ""

    # query for requested profile to follow
    try:
        favsite = Sites.objects.get(title__exact=name)
    except Sites.DoesNotExist:
        # requested profile to follow does not exist
        return JsonResponse({"Error": "Error. Site not found."}, status=404)
    # query for follower's record
    follower = request.user.username
    try:
        folName = User.objects.get(username__exact=follower)
    except User.DoesNotExist:
        # follower's record not found
        return JsonResponse({"Error": "Error. User not found."}, status=404)

    # find out if follow record already exists. If not, create it
    try:
        follow = Favorites.objects.get(
            watcher__exact=folName, site__exact=userToBefollowed)
    except Follow.DoesNotExist:
        # record not found so create record
        newRecord = True
        activity = False
        follow = Follow(follower=folName,
                        followed=userToBefollowed, is_active=False)
        follow.save()
        return JsonResponse({"newRecord": newRecord, "activity": activity})

    if request.method == "PUT":
        data = json.loads(request.body)
        follow.is_active = data["is_active"]
        activity = follow.is_active
        follow.save()
        return JsonResponse(follow.serialize(), safe=False)
    activity = follow.is_active
    return JsonResponse({"newRecord": newRecord, "activity": activity})


def favor(request):
    print(request)
    name = request.user.username
    #if site == "ancient-rome":
# check to see if 'site' is in category list. if so, print out all sites with that category.
# if not in category list, check to see if it is a 'title' and print that out.
# make header one or the other.

    favorites = Favorites.objects.filter(
        name=favorites.watcher)
    print(favorites)

    #return HttpResponse({"sites": sites})
    #return JsonResponse(sites, safe=False)
    return JsonResponse([favorites.serialize() for favorite in favorites], safe=False)

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
