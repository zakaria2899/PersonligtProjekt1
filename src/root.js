function formatNumber(number) {
  return new Intl.NumberFormat('dk-DK').format(number);
}

export { formatNumber };
