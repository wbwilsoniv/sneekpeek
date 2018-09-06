class SneakersController < ApplicationController

    def index
        brand = Brand.find(params[:brand_id])
        render json: { sneakers: brand.sneakers } 
    end

    def create
        brand = Brand.find(params[:brand_id])
        brand.sneakers.create!(sneak_params)
        render json: { sneaker: brand.sneakers.all }
    end
end
