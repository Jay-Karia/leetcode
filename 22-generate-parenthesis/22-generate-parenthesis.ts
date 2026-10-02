function generateParenthesis(n: number): string[] {
    if (n-- === 1) return ["()"];

    const res: string[] = [];
    const dfs = (O, C, s) => {
        if (!O && !C) {
            res.push(s + ")");
            return;
        }

        if (O > 0)
            dfs(O - 1, C, s + "(");

        if (C >= O)
            dfs(O, C - 1, s + ")");
    };

    dfs(n, n, "(");

    return res;
};
