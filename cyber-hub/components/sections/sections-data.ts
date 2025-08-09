export type SectionData = {
  id: string
  title: string
  code: string
}

export const SECTIONS: SectionData[] = Array.from({ length: 30 }, (_, i) => {
  const n = i + 1
  return {
    id: `section-${n}`,
    title: `Bo‘lim ${n}`,
    code: `# Bo‘lim ${n} — namunaviy buyruqlar\n# Bu yerga o'zingizning terminal buyruqlaringizni yozishingiz mumkin.\necho "Section ${n}"`,
  }
})
