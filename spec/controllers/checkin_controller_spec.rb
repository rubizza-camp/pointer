require 'rails_helper'
RSpec.describe CheckinsController, type: :controller do
  it 'should return JSON' do
    id = create(:trip).id
    post :create, params: { trip_id: id, lat: 43, lng: 45}

    expect response.header['Content-Type'].should include 'application/json'
  end

  it 'should suite API' do
    id = create(:trip).id
    post :create, params: { trip_id: id, lat: 43, lng: 45}

    expect(JSON.parse(response.body)['data']['attributes']['lat'].to_i).to eq 43
  end



end

