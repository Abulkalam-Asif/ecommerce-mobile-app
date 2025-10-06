import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "@/src/constants/theme";

type SortMenuProps = {
  onApply: (sortType: string) => void;
  selectedSort: string;
};

const sortOptions = [
  { id: "recommended", label: "Recommended (default)" },
  { id: "price_low_high", label: "Price : High to Low" },
  { id: "price_high_low", label: "Price : Low to High" },
];

const SortMenu = ({ onApply, selectedSort }: SortMenuProps) => {
  const [localSelected, setLocalSelected] = React.useState(selectedSort);

  const handleApply = () => {
    onApply(localSelected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        {sortOptions.map((option) => (
          <Pressable
            key={option.id}
            style={[
              styles.option,
              localSelected === option.id && styles.selectedOption,
            ]}
            onPress={() => setLocalSelected(option.id)}>
            <Text
              style={[
                styles.optionText,
                localSelected === option.id && styles.selectedOptionText,
              ]}>
              {option.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.applyButton,
          pressed && styles.applyButtonPressed,
        ]}
        onPress={handleApply}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </Pressable>
    </View>
  );
};

export default SortMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  optionsContainer: {
    marginBottom: 30,
    gap: 16,
  },
  option: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.background,
    backgroundColor: "white",
  },
  selectedOption: {
    backgroundColor: theme.colors.primary_light,
    borderColor: theme.colors.primary,
  },

  optionText: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.placeholder,
  },
  selectedOptionText: {
    color: theme.colors.text,
  },

  applyButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 28,
    alignItems: "center",
    marginTop: "auto",
  },
  applyButtonPressed: {
    opacity: 0.8,
  },

  applyButtonText: {
    color: "white",
    fontSize: 14,
    fontFamily: theme.fonts.semibold,
  },
});
