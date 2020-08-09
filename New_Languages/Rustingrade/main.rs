// Playing around with Rust

fn check_repeat(input: &str, letter: char) -> i64
{
  let mut counter = 0;
  for char in input.chars() {
    if char == letter
    {
      counter = counter + 1;
    }
  }
  return counter;
}

fn invert_str(input: &str) -> String
{
  let mut rev = String::from("");
  for c in input.chars().rev() 
  {
    rev.push(c);
  }
  return rev;
}

fn main() 
{
  let mut x = String::from("hello");
  let n = invert_str(&x);
  println!("{}", n)
}


// let mut s = String::from("abc");

// s.push('1');
// s.push('2');
// s.push('3');

// assert_eq!("abc123", s);