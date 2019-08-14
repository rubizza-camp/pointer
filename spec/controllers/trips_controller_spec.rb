# frozen_string_literal: true

RSpec.describe TripsController, type: :controller do
  it 'should suite api' do
    post :create, params: { name: 'TestTrip', lat: 45, lng: 53 }

    expect(JSON.parse(response.body)['data']['attributes']['name']).to eq('TestTrip')
  end

  it 'should provide good id' do
    post :create, params: { name: 'TestTrip', lat: 45, lng: 53 }

    expect(JSON.parse(response.body)['data']['attributes']['uuid']).to eq assigns(:trip).uuid
  end

  it 'should generate good link' do
    post :create, params: { name: 'TestTrip', lat: 45, lng: 53 }
    get :show, params: { id: assigns(:trip).uuid }
    expect(response).to have_http_status(200)
  end

  it 'should be json' do
    post :create
    response.header['Content-Type'].should include 'application/json'
  end
end
