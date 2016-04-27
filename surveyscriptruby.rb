require "json"
require "selenium-webdriver"
require "rspec"
include RSpec::Expectations

describe "Surveyscriptruby" do

  before(:each) do
    @driver = Selenium::WebDriver.for :firefox
    @base_url = "https://qtrial2016q2az1.az1.qualtrics.com/"
    @accept_next_alert = true
    @driver.manage.timeouts.implicit_wait = 30
    @verification_errors = []
  end
  
  after(:each) do
    @driver.quit
    @verification_errors.should == []
  end
  
  it "test_surveyscriptruby" do
    @driver.get(@base_url + "/jfe/form/SV_5o3JCxVBYpYvEjj")
    @driver.find_element(:id, "NextButton").click
    @driver.find_element(:id, "QR~QID5~4").click
    @driver.find_element(:id, "QID5-4-label").click
    @driver.find_element(:id, "QR~QID7~4").click
    @driver.find_element(:id, "QID7-4-label").click
    @driver.find_element(:id, "QR~QID8~4").click
    @driver.find_element(:id, "QID8-4-label").click
    @driver.find_element(:id, "QR~QID9~4").click
    @driver.find_element(:id, "QID9-4-label").click
    @driver.find_element(:id, "QR~QID10~4").click
    @driver.find_element(:id, "QID10-4-label").click
    @driver.find_element(:id, "QR~QID11~4").click
    @driver.find_element(:id, "QID11-4-label").click
    @driver.find_element(:id, "QR~QID29~4").click
    @driver.find_element(:id, "QID29-4-label").click
    @driver.find_element(:id, "QR~QID12~4").click
    @driver.find_element(:id, "QID12-4-label").click
    @driver.find_element(:id, "NextButton").click
    @driver.find_element(:id, "QR~QID16~3").click
    @driver.find_element(:id, "QID16-3-label").click
    @driver.find_element(:id, "QR~QID17~4").click
    @driver.find_element(:id, "QID17-4-label").click
    @driver.find_element(:id, "QR~QID18~4").click
    @driver.find_element(:id, "QID18-4-label").click
    @driver.find_element(:id, "QR~QID22~4").click
    @driver.find_element(:id, "QID22-4-label").click
    @driver.find_element(:id, "QR~QID20~4").click
    @driver.find_element(:id, "QID20-4-label").click
    @driver.find_element(:id, "QR~QID21~5").click
    @driver.find_element(:id, "QID21-5-label").click
    @driver.find_element(:id, "NextButton").click
    @driver.find_element(:id, "QR~QID23~2").click
    @driver.find_element(:id, "QID23-2-label").click
    @driver.find_element(:id, "QR~QID25").clear
    @driver.find_element(:id, "QR~QID25").send_keys "21"
    @driver.find_element(:id, "QR~QID26").clear
    @driver.find_element(:id, "QR~QID26").send_keys "Dutch"
    @driver.find_element(:id, "QR~QID27").clear
    @driver.find_element(:id, "QR~QID27").send_keys "101"
  end
  
  def element_present?(how, what)
    ${receiver}.find_element(how, what)
    true
  rescue Selenium::WebDriver::Error::NoSuchElementError
    false
  end
  
  def alert_present?()
    ${receiver}.switch_to.alert
    true
  rescue Selenium::WebDriver::Error::NoAlertPresentError
    false
  end
  
  def verify(&blk)
    yield
  rescue ExpectationNotMetError => ex
    @verification_errors << ex
  end
  
  def close_alert_and_get_its_text(how, what)
    alert = ${receiver}.switch_to().alert()
    alert_text = alert.text
    if (@accept_next_alert) then
      alert.accept()
    else
      alert.dismiss()
    end
    alert_text
  ensure
    @accept_next_alert = true
  end
end
