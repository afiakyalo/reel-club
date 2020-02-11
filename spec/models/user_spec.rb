require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:username).when("Fifi") }
  it { should_not have_valid(:username).when(nil, "") }

  it { should have_valid(:email).when("test@test.com") }
  it { should_not have_valid(:email).when(nil, "") }

  it { should have_valid(:city).when("Philly") }
  it { should_not have_valid(:city).when(nil, "") }

  it { should have_valid(:state).when("PA") }
  it { should_not have_valid(:state).when(nil, "") }
end
