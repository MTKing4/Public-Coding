from google_play_scraper import app

result = app('com.nianticlabs.pokemongo')
print(result['installs'])