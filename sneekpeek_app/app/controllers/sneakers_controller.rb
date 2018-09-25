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
        @sneaker = Sneaker.create(sneak_params)
        render json: { sneaker: @sneaker }
    end

    # sneaker.errors? status: :unprocessable_entity? 
    def update
        @sneaker = Sneaker.find(params[:id])
        if @sneaker.update(sneak_params)
            render json: @sneaker
        else
            render json: @sneaker.errors, status: :unprocessable_entity
        end
    end

    # return list of all sneakers after destruction?
    def destroy
        @sneaker = Sneaker.find(params[:id])
        @sneaker.destroy
        render json: { message: "Sneaker Destroyed" }
    end
    
    private

    def sneak_params
        params.permit(:model, :price, :release_date, :brand_id)
    end
end

