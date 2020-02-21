class MoviesWrapper
  BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key=#{ENV["TMDB_API_KEY"]}"

  attr_reader :movie_object

  def initialize(movie_object)
    @movie_object = movie_object
  end

  def self.retrieve_movies(query)
    moviesData = movie_request(query)
    movies = moviesData["results"]
    movies_arr = []

    movies.each do |movie|
      movie_obj = {
        tmdb_id: movie["id"],
        title: movie["title"],
        poster: movie["poster_path"],
        synopsis: movie["overview"],
        release_date: movie["release_date"],
        rating: movie["vote_average"]
      }
      movies_arr << movie_obj
    end
    return movies_arr
  end

  def self.movie_request(query)
    response = Faraday.get("#{BASE_URL}&query=#{query}")
    return JSON.parse(response.body)
  end

  def self.movies(parsed_movies_array)
    movies_list = []
    parsed_movies_array.each do |movie_data|
      movies_list << movie_data
    end
    return movies_list
  end
end
