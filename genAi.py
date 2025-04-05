from google import genai

client = genai.Client(api_key="AIzaSyA39ZZuokaXj4jLb1JuHrpQUP1i3u91jcM")

response = client.models.generate_content(
    model="gemini-2.0-flash", contents="tell me about frankenstein"
)
print(response.text)
