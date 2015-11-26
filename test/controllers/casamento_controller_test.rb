require 'test_helper'

class CasamentoControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

end
