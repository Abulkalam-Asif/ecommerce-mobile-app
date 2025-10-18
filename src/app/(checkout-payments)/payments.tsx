import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import GeneralTopBar from "@/src/components/general/GeneralTopBar";
import { theme } from "@/src/constants/theme";
import PaymentOption from "@/src/components/checkout-payment/payments/PaymentOption";

export default function PaymentsScreen() {
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  const [isChecked, setChecked] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const isProceedDisabled =
    !selectedMethod ||
    (selectedMethod !== "Cash on Delivery" && (!isChecked || !screenshot));

  return (
    <View style={styles.mainContainer}>
      <GeneralTopBar text="Payments" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.payWithText}>Pay with</Text>
        <PaymentOption
          name="Cash on Delivery"
          image={require("@/src/assets/icons/payments/cod.png")}
          onSelect={(method: string) => setSelectedMethod(method)}
          selectedMethod={selectedMethod}
          contentHeight={0}
          screenshotRequired={false}
          isChecked={isChecked}
          setChecked={setChecked}
          screenshot={screenshot}
          setScreenshot={setScreenshot}
        />
        <PaymentOption
          name="JazzCash"
          image={require("@/src/assets/icons/payments/jazzcash.png")}
          onSelect={(method: string) => setSelectedMethod(method)}
          selectedMethod={selectedMethod}
          contentHeight={400}
          screenshotRequired={true}
          isChecked={isChecked}
          setChecked={setChecked}
          screenshot={screenshot}
          setScreenshot={setScreenshot}>
          <Text style={styles.accountText}>Account Number: 123456789</Text>
          <Text style={styles.accountText}>Account Title: John Doe</Text>
        </PaymentOption>
        <PaymentOption
          name="Easypaisa"
          image={require("@/src/assets/icons/payments/easypaisa.png")}
          onSelect={(method: string) => setSelectedMethod(method)}
          selectedMethod={selectedMethod}
          contentHeight={400}
          screenshotRequired={true}
          isChecked={isChecked}
          setChecked={setChecked}
          screenshot={screenshot}
          setScreenshot={setScreenshot}>
          <Text style={styles.accountText}>Account Number: 123456789</Text>
          <Text style={styles.accountText}>Account Title: John Doe</Text>
        </PaymentOption>
        <PaymentOption
          name="Bank Account"
          image={require("@/src/assets/icons/payments/bank.png")}
          onSelect={(method: string) => setSelectedMethod(method)}
          selectedMethod={selectedMethod}
          contentHeight={430}
          screenshotRequired={true}
          isChecked={isChecked}
          setChecked={setChecked}
          screenshot={screenshot}
          setScreenshot={setScreenshot}>
          <Text style={styles.accountText}>Meezan Bank</Text>
          <Text style={styles.accountText}>Account Number: 123456789</Text>
          <Text style={styles.accountText}>Account Title: John Doe</Text>
        </PaymentOption>
      </ScrollView>

      <View style={styles.proceedButtonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.proceedButton,
            pressed && styles.proceedButtonPressed,
            isProceedDisabled && styles.proceedButtonDisabled,
          ]}
          onPress={() => {}}
          disabled={isProceedDisabled}>
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 12,
  },
  payWithText: {
    fontSize: 14,
    fontFamily: theme.fonts.semibold,
  },
  accountText: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
  },

  proceedButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopColor: theme.colors.background,
    borderTopWidth: 1,
  },
  proceedButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  proceedButtonPressed: {
    opacity: 0.8,
  },
  proceedButtonDisabled: {
    backgroundColor: theme.colors.background,
  },
  proceedButtonText: {
    fontSize: 16,
    fontFamily: theme.fonts.semibold,
    color: "#fff",
  },
});
