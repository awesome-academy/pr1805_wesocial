class GroupsController < ApplicationController
  def show
    @group = Group.find_by id: params[:id]
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new group_params
  end

  private

  # def group_params
  #   params.require(:group).permit 
  # end
end
