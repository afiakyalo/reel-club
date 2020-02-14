class MoviesWrapper
  BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key=ENV[#{TMDB_API_KEY}]"

  attr_reader :movies_urls

  def initialize(urls)
    @movie_urls = urls
  end

  def self.retrieve_movies(query)
    binding.pry
  end
end
