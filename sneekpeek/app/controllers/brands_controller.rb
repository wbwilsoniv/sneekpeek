class BrandsController < ApplicationController

    def index
        @brands = Brand.all
        render json: @brands
    end

    def show
        @brand = Brand.find(params[:id])
        render json: { brand: @brand }
    end
    
    def create
        @brand = Brand.create!(brand_params)
        render json: { brand: @new_brand }
    end

    def update
        @brand = Brand.find(params[:id])
        if @brand.update(brand_params)
            render json: @brand
        else
            render json: @brand.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @brand = Brand.find(params[:id])
        @brand.destroy
        render json: { message: "Brand Destroyed" }
    end

    private
    
    def brand_params
        params.permit(:name, :about, :founded, :hq)
    end
end
