#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  lcd.begin(16, 2);

  Serial.begin(9600);
  Serial.println("Digite um texto para exibir no LCD: ");
}

void loop() {
  if (Serial.available() > 0) {
    String input = Serial.readStringUnit('\n');
    lcd.clear();
    lcd.print(input);
  }
}