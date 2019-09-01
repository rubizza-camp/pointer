class TaskSerializer
  include FastJsonapi::ObjectSerializer

  attributes :start_time, :end_time
  belongs_to :pet
end
