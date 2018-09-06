class SneakersController < ApplicationController

    def index
        # brand = Brand.find(params[:brand_id])
        # render json: { sneaker: brand.sneakers }
        @sneakers = Sneaker.all
        render json: @sneakers 
    end

    def show
        @sneaker = Sneaker.find(params[:id])
        render json: { sneaker: @sneaker }
    end

    def create
        # brand = Brand.find(params[:brand_id])
        # brand.sneakers.create!(sneak_params)
        
        @sneakers = Sneaker.create(sneak_params)
        render json: { sneaker: @sneakers }
    end

    private

    def sneak_params
        params.permit(:model, :price, :release_date, :brand_id)
    end
end

