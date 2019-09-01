# frozen_string_literal: true

class TasksController < ApplicationController
  def index
  end

  def create
    render json: TaskSerializer.new(Task.create(pet_id: params[:pet_id])).serialized_json
  end

  def destroy
    @task.delete
  end

  def update
    @task.update(task_params)
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.permit(:start_time, :end_time)
  end

end
