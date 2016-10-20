#!/usr/bin/env ruby

require_relative "../string_to_array_solution"
require "test/unit"

class StringToArraySolutionTest < Test::Unit::TestCase
  def test_should_return_an_empty_array_if_no_string_is_provided
    arrayOfStrings = StringToArraySolution.string_to_array

    assert_equal(0, arrayOfStrings.length)
  end

  def test_should_return_an_empty_array_for_an_empty_string
    emptyString = ""

    arrayOfStrings = StringToArraySolution.string_to_array(emptyString)

    assert_equal(0, arrayOfStrings.length); 
  end

  def test_should_return_an_array_with_two_positions_for_a_two_word_string
    two_word_string = "Robin Singh"

    arrayOfStrings = StringToArraySolution.string_to_array(two_word_string)

    assert_equal(2, arrayOfStrings.length);
  end

  def test_should_return_an_array_with_robin_and_singh_as_first_and_second_positions_values
    name = "Robin Singh"

    arrayOfStrings = StringToArraySolution.string_to_array(name)

    assert_equal("Robin", arrayOfStrings[0]);
    assert_equal("Singh", arrayOfStrings[1]);
  end
end