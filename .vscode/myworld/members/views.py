from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Member

def index(request):
    mymembers = Member.objects.all().values()
    template = loader.get_template('myfirst.html')
    context = {
        'mymembers': mymembers,
    }
    return HttpResponse(template.render(context, request))

def add(request):
    template = loader.get_template('add.html')
    return HttpResponse(template.render({}, request))


# Create your views here.
