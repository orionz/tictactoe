require 'rubygems'
require 'sinatra'

settings.port = ENV['PORT'] || 4567

get "/" do
  erb :game
end
