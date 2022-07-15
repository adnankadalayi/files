from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from . serializers import NoteSerializer
from . models import Note

@api_view(['GET'])
def Routes(request):
    value = {'key': 'value',
             '2': 'value',
             '3': 'value',
             '4': 'value',
             '5': 'value',
             '1': 'value', }
    return Response(value)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getNote(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes)
    return Response(serializer.data)
