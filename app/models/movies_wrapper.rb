class MoviesWrapper
  BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key=ENV[#{TMDB_API_KEY}]"

  attr_reader :movies_urls

  def initialize(urls)
    @movie_urls = urls
  end

  def self.retrieve_gifs(query)
    movieData = movie_request(query)
    urls = movie_urls(movieData)
    MoviesWrapper.new(urls)
  end

  def self.movie_request(query)
    response = Faraday.get("#{BASE_URL}&q=#{query}")
    return JSON.parse(response.body)
  end

  def self.movie_urls(parsed_movie_array)
    movie_urls = []
    parsed_movie_array["data"].each do |movie_data|
      binding.pry
      movie_urls<< movie_data
    end
    return movie_urls
  end

end
