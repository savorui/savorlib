export const yamlData1 = `


singleQuote: true
proseWrap: always
semi: yes

overrides:
  - name: aaa
    files: filename

htmlWhitespaceSensitivity:

parser: 

plugins: 
  - 1
  - abc
`;

export const yamlData2 = `# Unused anchors will be reported
unused anchor: &unused anchor


# Of course numbers are supported!
number: 12


# As well as booleans!
boolean: true


# And strings
string: I am a string


# This property is using the JSON schema recursively
reference:
  boolean: Not a boolean`;

export const yamlData3 = `

# Also works in arrays
array:
  - string: 12
    enum: Mewtwo
    reference:
      reference:
        boolean: true


# JSON referenses can be clicked for navigation
pointer:
  $ref: '#/array'


# This anchor can be referenced
anchorRef: &anchor can be clicked as well


# Press control while hovering over the anchor
anchorPointer: *anchor


formatting:       Formatting is supported too! Under the hood this is powered by Prettier. Just press Ctrl+Shift+I or right click and press Format to format this document.


`;
