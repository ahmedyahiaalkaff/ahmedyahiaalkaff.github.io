export const scrollToSection = (sectionId:string) => {
    const section = document.querySelector(sectionId);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start" });
}