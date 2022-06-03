//
//  InflationMaxUITests.m
//  InflationMaxUITests
//
//  Created by Truong Tran Quang on 03/06/2022.
//

#import <XCTest/XCTest.h>

@interface InflationMaxUITests : XCTestCase

@end

@implementation InflationMaxUITests

- (void)setUp {
    // Put setup code here. This method is called before the invocation of each test method in the class.

    // In UI tests it is usually best to stop immediately when a failure occurs.
    self.continueAfterFailure = NO;

    // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
}

- (void)testExample {
    // UI tests must launch the application that they test.
    // Use XCTAssert and related functions to verify your tests produce the correct results.
  
  [XCTContext runActivityNamed:@"screenshot" block:^(id<XCTActivity>  _Nonnull activity) {
  
  
  XCUIApplication *app = [[XCUIApplication alloc] init];
  [/*@START_MENU_TOKEN@*/app.textFields[@"Current inflation rate"]/*[["app","[",".otherElements matchingIdentifier:@\"Current inflation rate Current risk free rate Amount you want to save For how long (in years) will you save? 1 years from now you will still have $0 but it will only be worth $0. But if you invest it at a risk free rate you will have $0. Which will be worth $0 after inflation. A difference of: $0. Calculate Inflation\"]",".otherElements[@\"Current inflation rate\"].textFields[@\"Current inflation rate\"]",".textFields[@\"Current inflation rate\"]"],[[[-1,0,1]],[[-1,4],[-1,3],[1,2,2]],[[-1,4],[-1,3]]],[0,0]]@END_MENU_TOKEN@*/ tap];
  
  XCUIElement *key = app/*@START_MENU_TOKEN@*/.keys[@"3"]/*[[".keyboards.keys[@\"3\"]",".keys[@\"3\"]"],[[[-1,1],[-1,0]]],[0]]@END_MENU_TOKEN@*/;
  [key tap];
  
  XCUIElement *currentRiskFreeRateTextField = /*@START_MENU_TOKEN@*/app.textFields[@"Current risk free rate"]/*[["app","[",".otherElements matchingIdentifier:@\"Current risk free rate Amount you want to save For how long (in years) will you save? 1 years from now you will still have $0 but it will only be worth $0. But if you invest it at a risk free rate you will have $0. Which will be worth $0 after inflation. A difference of: $0. Calculate Inflation\"]",".otherElements[@\"Current risk free rate\"].textFields[@\"Current risk free rate\"]",".textFields[@\"Current risk free rate\"]"],[[[-1,0,1]],[[-1,4],[-1,3],[1,2,2]],[[-1,4],[-1,3]]],[0,0]]@END_MENU_TOKEN@*/;
  [currentRiskFreeRateTextField tap];
  [currentRiskFreeRateTextField tap];
  
  XCUIElement *key2 = app/*@START_MENU_TOKEN@*/.keys[@"6"]/*[[".keyboards.keys[@\"6\"]",".keys[@\"6\"]"],[[[-1,1],[-1,0]]],[0]]@END_MENU_TOKEN@*/;
  [key2 tap];
  [/*@START_MENU_TOKEN@*/app.textFields[@"Amount you want to save"]/*[["app","[",".otherElements matchingIdentifier:@\"Amount you want to save For how long (in years) will you save? 1 years from now you will still have $0 but it will only be worth $0. But if you invest it at a risk free rate you will have $0. Which will be worth $0 after inflation. A difference of: $0. Calculate Inflation\"]",".otherElements[@\"Amount you want to save\"].textFields[@\"Amount you want to save\"]",".textFields[@\"Amount you want to save\"]"],[[[-1,0,1]],[[-1,4],[-1,3],[1,2,2]],[[-1,4],[-1,3]]],[0,0]]@END_MENU_TOKEN@*/ tap];
  
  XCUIElement *key3 = app/*@START_MENU_TOKEN@*/.keys[@"1"]/*[[".keyboards.keys[@\"1\"]",".keys[@\"1\"]"],[[[-1,1],[-1,0]]],[0]]@END_MENU_TOKEN@*/;
  [key3 tap];
  
  XCUIElement *key4 = app/*@START_MENU_TOKEN@*/.keys[@"0"]/*[[".keyboards.keys[@\"0\"]",".keys[@\"0\"]"],[[[-1,1],[-1,0]]],[0]]@END_MENU_TOKEN@*/;
  [key4 tap];
  [key4 tap];
  [key4 tap];
 
  [/*@START_MENU_TOKEN@*/app.textFields[@"For how long (in years) will you save?"]/*[["app","[",".otherElements matchingIdentifier:@\"For how long (in years) will you save? 1 years from now you will still have $1000 but it will only be worth $0. But if you invest it at a risk free rate you will have $0. Which will be worth $0 after inflation. A difference of: $0. Calculate Inflation\"]",".otherElements[@\"For how long (in years) will you save?\"].textFields[@\"For how long (in years) will you save?\"]",".textFields[@\"For how long (in years) will you save?\"]"],[[[-1,0,1]],[[-1,4],[-1,3],[1,2,2]],[[-1,4],[-1,3]]],[0,0]]@END_MENU_TOKEN@*/ tap];
  [key3 tap];
  [key4 tap];
    
  [app.buttons[@"Calculate inflation"] tap];
  
  XCUIElement *differenceLabel =[[XCUIApplication alloc] init].staticTexts[@"A difference of: $588.46495860763."];
  XCTAssertEqual(differenceLabel.exists, true);
    
  }];
    
}

- (void)testLaunchPerformance {
    if (@available(macOS 10.15, iOS 13.0, tvOS 13.0, watchOS 7.0, *)) {
        // This measures how long it takes to launch your application.
        [self measureWithMetrics:@[[[XCTApplicationLaunchMetric alloc] init]] block:^{
            [[[XCUIApplication alloc] init] launch];
        }];
    }
}

@end
