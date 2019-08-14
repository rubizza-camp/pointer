# frozen_string_literal: true

RSpec.describe StaticPagesController, type: :controller do
  it 'returns a 200 custom status code' do
    get :home
    expect(response).to have_http_status(200)
  end
end
