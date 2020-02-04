def v2r(n, base): # value to representation
    """Convert a positive number to its digit representation in a custom base."""
    b = len(base)
    digits = ''
    while n > 0:
        digits = base[n % b] + digits
        n  = n // b
    return digits

def r2v(digits, base): # representation to value
    """Compute the number represented by string 'digits' in a custom base."""
    b = len(base)
    n = 0
    for d in digits:
        n = b * n + base.index(d)
    return n

def b2b(digits, base1, base2):
    """Convert the digits representation of a number from base1 to base2."""
    return v2r(r2v(digits, base1), base2)

print(b2b('A', '0123456789ABCDEF', '0123456789'))