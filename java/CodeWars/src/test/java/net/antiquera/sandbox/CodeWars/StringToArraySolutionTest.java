package net.antiquera.sandbox.CodeWars;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

import org.junit.Test;

public class StringToArraySolutionTest {
	@Test
	public void shoudReturnAnArrayWithTwoPositions() {
		String stringToSplit = "Robin Singh";
		
		String[] arrayOfStrings = StringToArraySolution.stringToArray(stringToSplit);
		
		assertThat(arrayOfStrings.length, equalTo(2));
		
	}
}
