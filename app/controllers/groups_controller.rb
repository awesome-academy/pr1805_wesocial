class GroupsController < ApplicationController
  def show
    @group = Group.find_by id: params[:id]
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new group_params
    if  @group.save
      flash[:success] = "#{I18n.t "create_group_success"}"
      redirect_to group_path @group
    else
      render :new
    end
  end

  private

  def group_params
    params.require(:group).permit :name, :description, :privacy, :address, 
    :cover, :email, :website, :phone, :facebook, :twitter, :instagram
  end
end
