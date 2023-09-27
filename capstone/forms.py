form django import forms

class UserForm(forms.Form):
    username = forms.CharField(min_length=5, max_length=20)
    email = forms.Email
    password = forms.Password