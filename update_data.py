import json

concerts = [
    {
        "artist": "Updated concert",
        "year": 1991,
        "city": "Chicago",
        "hidden_gem": False,
        "url": "https://example.com"
    }
]

with open("data/concerts.json", "w", encoding="utf-8") as f:
    json.dump(concerts, f, indent=2)

print("concerts.json updated")
