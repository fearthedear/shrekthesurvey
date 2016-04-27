package com.example.tests;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
import org.junit.*;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class Suverscriptinjava {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @Before
  public void setUp() throws Exception {
    driver = new FirefoxDriver();
    baseUrl = "https://qtrial2016q2az1.az1.qualtrics.com/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Test
  public void testSuverscriptinjava() throws Exception {
    driver.get(baseUrl + "/jfe/form/SV_5o3JCxVBYpYvEjj");
    driver.findElement(By.id("NextButton")).click();
    driver.findElement(By.id("QR~QID5~4")).click();
    driver.findElement(By.id("QID5-4-label")).click();
    driver.findElement(By.id("QR~QID7~4")).click();
    driver.findElement(By.id("QID7-4-label")).click();
    driver.findElement(By.id("QR~QID8~4")).click();
    driver.findElement(By.id("QID8-4-label")).click();
    driver.findElement(By.id("QR~QID9~4")).click();
    driver.findElement(By.id("QID9-4-label")).click();
    driver.findElement(By.id("QR~QID10~4")).click();
    driver.findElement(By.id("QID10-4-label")).click();
    driver.findElement(By.id("QR~QID11~4")).click();
    driver.findElement(By.id("QID11-4-label")).click();
    driver.findElement(By.id("QR~QID29~4")).click();
    driver.findElement(By.id("QID29-4-label")).click();
    driver.findElement(By.id("QR~QID12~4")).click();
    driver.findElement(By.id("QID12-4-label")).click();
    driver.findElement(By.id("NextButton")).click();
    driver.findElement(By.id("QR~QID16~3")).click();
    driver.findElement(By.id("QID16-3-label")).click();
    driver.findElement(By.id("QR~QID17~4")).click();
    driver.findElement(By.id("QID17-4-label")).click();
    driver.findElement(By.id("QR~QID18~4")).click();
    driver.findElement(By.id("QID18-4-label")).click();
    driver.findElement(By.id("QR~QID22~4")).click();
    driver.findElement(By.id("QID22-4-label")).click();
    driver.findElement(By.id("QR~QID20~4")).click();
    driver.findElement(By.id("QID20-4-label")).click();
    driver.findElement(By.id("QR~QID21~5")).click();
    driver.findElement(By.id("QID21-5-label")).click();
    driver.findElement(By.id("NextButton")).click();
    driver.findElement(By.id("QR~QID23~2")).click();
    driver.findElement(By.id("QID23-2-label")).click();
    driver.findElement(By.id("QR~QID25")).clear();
    driver.findElement(By.id("QR~QID25")).sendKeys("21");
    driver.findElement(By.id("QR~QID26")).clear();
    driver.findElement(By.id("QR~QID26")).sendKeys("Dutch");
    driver.findElement(By.id("QR~QID27")).clear();
    driver.findElement(By.id("QR~QID27")).sendKeys("101");
  }

  @After
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }

  private boolean isElementPresent(By by) {
    try {
      driver.findElement(by);
      return true;
    } catch (NoSuchElementException e) {
      return false;
    }
  }

  private boolean isAlertPresent() {
    try {
      driver.switchTo().alert();
      return true;
    } catch (NoAlertPresentException e) {
      return false;
    }
  }

  private String closeAlertAndGetItsText() {
    try {
      Alert alert = driver.switchTo().alert();
      String alertText = alert.getText();
      if (acceptNextAlert) {
        alert.accept();
      } else {
        alert.dismiss();
      }
      return alertText;
    } finally {
      acceptNextAlert = true;
    }
  }
}
