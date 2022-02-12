/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 4,
  },

  textSkill: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
