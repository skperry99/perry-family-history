export const ancestors = [
  {
    id: "james-clarence-milburn",
    name: "James Clarence Milburn",
    lifespan: "1944–2003",
    relationship:
      "Biological father; youngest child of the Hemlock Street household.",
    snapshot: [
      "Born: 26 July 1944, Beaumont, Jefferson County, Texas",
      "Died: 26 January 2003, California (buried at San Joaquin Valley National Cemetery, Santa Nella)",
      "Parents on record: Richard Charles Milburn Sr & Mary Jane “Jane” (Simmons) Milburn",
      "Probable biological father: Robert Theophoulus Tatum, Black educator and principal in Beaumont",
    ],
    story: [
      "James came into the world in the middle of World War II, born into a crowded Black household in Beaumont’s refinery belt. Hemlock Street, where he grew up, was ringed by siblings, cousins, and neighbors who worked at refineries, went to segregated schools, and worshiped in Black churches that anchored the community.",
      "By the 1950 census, he appears as a five-year-old at 2175 Hemlock—the “baby” of the family in a house already full of teenagers and young adults. In 1955, when James was about ten, his mother Jane died in San Francisco. Her body was brought back to Beaumont for burial, and James spent most of his adolescence without his mother, shaped by older siblings and the rhythms of a working-class Black neighborhood in Jim Crow Texas.",
      "In July 1965, during the Vietnam era, he enlisted in the U.S. Army and served until July 1967. By the mid-1970s, James was living in San Francisco, where he met your mother, Joyce Ellen Perry, in 1976. She later went to Houston while pregnant, where you were born in 1977, and then moved to Lansing, Michigan, to live with her brother Edwin while you were a baby.",
    ],
    worldAround: [
      "James’s life spans Jim Crow Texas, the Civil Rights era, and the Vietnam War. His childhood was shaped by segregated schools and Black neighborhoods like Charlton-Pollard and Pear Orchard. His young adulthood unfolded as the western branch of the Great Migration was bringing thousands of Texas and Louisiana families to the Bay Area.",
    ],
    legacy: [
      "On paper, James is a Milburn son; genetically he also carries the Tatum/Davis line of educators. Through him, refinery-town roots and Black professional-class roots both converge and are passed on to you.",
    ],
    notes: [
      "Bridge person between Milburn/Simmons and Tatum/Davis lines.",
      "His path traces Texas → California → Texas → Michigan in a single generation.",
    ],
  },
  {
    id: "mary-jane-simmons-milburn",
    name: "Mary Jane “Jane” (Simmons) Milburn",
    lifespan: "1901–1955",
    relationship: "Grandmother; mother of James Clarence Milburn.",
    snapshot: [
      "Born: 17 November 1901, Opelousas, St. Landry Parish, Louisiana",
      "Died: 30 April 1955, San Francisco, California; buried in Magnolia Cemetery, Beaumont",
      "Parents: Henry Simmons Jr & Amelia (Barber) Simmons",
      "Marriage: Richard Charles Milburn, 26 October 1921, Jefferson County, Texas",
    ],
    story: [
      "Jane’s life begins in Opelousas, Louisiana, in a Black family making its way in the decades after Reconstruction. As a girl she moved with her parents, Henry and Amelia, along the Gulf Coast corridor from St. Landry Parish to Beaumont, Texas, part of a broader wave of Black families following work in railroads, sawmills, and the emerging oil and gas industry.",
      "By 1910 she appears in Beaumont as a mis-recorded 'James Simmons, son' at 981 Brookland. In adulthood she is consistently Mary Jane or Jane, daughter of Henry and Amelia, rooted in the same tight cluster of Black streets south of downtown.",
      "In 1921 she married Richard Charles Milburn and built a home on Hemlock Street. Over the next two decades that house filled with nine surviving children who would carry the Milburn name into WWII, Korea, Vietnam, the postal service, and shipyards from Texas to California.",
      "Sometime in the early 1950s, Jane followed some of her older children west to San Francisco. She died there in 1955; her body was brought back to Beaumont for burial in Magnolia Cemetery, tying together Louisiana, Texas, and California in one life story.",
    ],
    worldAround: [
      "Jane lived through Jim Crow segregation, the Great Depression, and World War II. Her adult years coincide with Beaumont’s transformation into a refinery hub, with Black neighborhoods like McKinley, Hemlock, Charlton-Pollard, and Pear Orchard providing the labor that fueled it.",
    ],
    legacy: [
      "Jane’s greatest legacy is relational: nine surviving children who became soldiers, postal workers, refinery workers, church leaders, and community builders in Texas and California.",
      "Decades after her death, her youngest son James met Joyce Ellen Perry in San Francisco. Joyce later went to Houston, where I was born, and then to Lansing, Michigan. Jane never lived to see me, but the migration pattern she helped set—Opelousas → Beaumont → San Francisco—continues directly in my story.",
    ],
    notes: [
      "Completed several years of high school, unusually high for a Black woman of her generation in Texas.",
      "Her story links Opelousas, Beaumont, and San Francisco into a single arc.",
    ],
  },
];

export function getAncestorById(id) {
  return ancestors.find((a) => a.id === id);
}
