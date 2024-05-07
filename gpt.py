import os
import json
import requests
import uuid
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
apiKey = os.getenv('OPEN_AI_API_KEY')

client = OpenAI(api_key = apiKey)

dataFile = open('./data.txt')

data = dataFile.readlines()
dataFile.close()

artworkOffset = 3

for i in range(1 + artworkOffset * 13, len(data) - 1, 13):
  id = data[i + 1]
  title = data[i + 2][14:-3]
  description = data[i + 3][20:-3]
  categories = ", ".join([category['name'] for category in json.loads(data[i + 4][16: -2])])
  styles = ", ".join([style['name'] for style in json.loads(data[i + 5][13:-2])])
  themes = ", ".join([theme['name'] for theme in json.loads(data[i + 6][13:-2])])
  orientation = data[i + 7][39: -5]
  print(i, title)
  size = ""
  if orientation == "Square": size = "1024x1024"
  if orientation == "Horizontal": size = "1792x1024"
  if orientation == "Vertical": size = "1024x1792"
  response = client.images.generate(
    model="dall-e-3",
    prompt="Artwork/Painting called: (" + title + "), described as: (" + description + "). Make it fit the categories of: (" + categories + "), in the style of: (" + styles + "), and a theme of: (" + themes + ").",
    size=size,
    quality="standard",
    n=1,
  )
  url = response.data[0].url
  imgData = requests.get(url).content
  fileName = '/public/assets/artworks/' + str(uuid.uuid4()) + '.png'
  print(fileName)
  with open('.' + fileName, 'bw+') as handler:
    handler.write(imgData)
    
  data[i + 8] = '    "image": "' + fileName + '",\n' 
  
file = open('./data.txt', 'w')
file.writelines(data)
file.close()