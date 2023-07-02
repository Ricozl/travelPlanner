from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from .models import User
#import React, { component } from 'react'



def index(request):
    return render(request, "capstone/index.html")

def places(request):
    return render(request, "capstone/mapPlaces.html")

def sites(request, site):
    #if site == "ancient-rome":
# check to see if 'site' is in category list. if so, print out all sites with that category.
# if not in category list, check to see if it is a 'title' and print that out.
# make header one or the other.
        # get all posts by all posters

    try:
        sitenm = Sites.objects.filter(sites_category = )
        sites = Sites.objects.all()
    elif profile == "following":
        # determine who user is following and get their posts to display
        reqUsernm = request.user.username
        try:
            usernm = User.objects.get(username__exact=reqUsernm)
        except User.DoesNotExist:
            return JsonResponse({"Error": "User not found"})
        followedNms = Follow.objects.filter(
            follower=usernm, is_active=True).values_list('followed')
        posts = Posto.objects.filter(poster__id__in=followedNms)
    else:
        # get posts posted by chosen username
        try:
            list = User.objects.get(username__exact=profile)
        except User.DoesNotExist:
            return JsonResponse({"Error": "User not found"})
        posts = Posto.objects.filter(poster__exact=list.id)
    return JsonResponse([post.serialize() for post in posts], safe=False)


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
