function fatorial_recursiva(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial_recursiva(n-1)
    }
}

// RECURSIVIDADE