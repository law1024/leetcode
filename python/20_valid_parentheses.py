#!/usr/bin/env python3
# coding: utf-8

# https://leetcode.com/problems/valid-parentheses/

class Solution:
    # @param {string} s
    # @return {boolean}
    # Accepted
    def isValid(self, s):
        l = len(s)
        if l == 0:
            return True

        if l % 2 != 0:
            return False

        stack = []

        for c in s:
            #print(c)
            if c == '(' or c == '[' or c == '{':
                #入栈
                stack.append(c)
                continue
            #javascript不会报错
            if len(stack) == 0:
                return False

            end = stack.pop()

            if c == ')' and end != '(':
                return False
            if c == ']' and end != '[':
                return False
            if c == '}' and end != '{':
                return False

        if len(stack) != 0:
            return False

        return True
