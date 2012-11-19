class UserController < ApplicationController

  def saving
    @user= User.new(params[:user])
    @user.country = params[:country]
    @user.state = params[:state]
    logger.info "### Inside saving #####{params[:country]}"
    logger.info "### Inside saving #####{params[:state]}"
    if @user.save
      flash[:success] = "Successfully Signed up"

    end
  end

  def update_state_select
    @user= User.new(params[:user])
    @states = Carmen::states( Carmen::country_code(params[:country]) ) || []
    logger.info "### Inside update  action #####{@states}"
    @user.country= Carmen::country_code(params[:country])
    #@user.save

    #respond_to do |format|
    #  format.js
    render :carmen_update do |page|
      page.replace_html("div#addressStates",
                        :partial => "states",
                        :locals => { :states => @states }
      )
    end
    #end
  end

  def state_select

    @countries = Country.find_country_by_name(params[:country])
    logger.info "### Inside state select  action #####{params[:country]}"
    logger.info "### Inside state select  action #####{@countries}"
    @cont_states= @countries.states
    logger.info "### Inside state select  action #####{@cont_states}"
    render :country_update do |page|
      page.replace_html("div#address",
                        :partial => "state",
                        :locals => { :states => @cont_states }
      )
    end
  end

end

