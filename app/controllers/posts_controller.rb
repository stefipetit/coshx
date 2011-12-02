class PostsController < ApplicationController
  before_filter :authenticate_admin!, :only => [:new, :create]

  def index
    @posts = Post.recent
  end

  def new
    @post = Post.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  def create
    post = Post.new(:author => current_admin, :title => params[:post][:title], :body => params[:post][:body])

    respond_to do |format|
      if post.save
        format.html { redirect_to admin_root_path, notice: 'Blog post saved' }
      else
        format.html { redirect_to admin_root_path, error: 'Error saving blog post.' }
      end
    end
  end

  def show
    @post ||= Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    respond_to do |format|
      if @post.update_attributes(params[:post])
        format.html  { redirect_to @post, :notice => 'Post was successfully updated.' }
      else
        format.html  { render :action => "edit" }
      end
    end
  end
end
