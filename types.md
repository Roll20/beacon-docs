# Types

This section provides detailed descriptions and examples of the key types used in the SDK.

Each type represents different aspects of characters, tokens, roll results, and macro attributes, facilitating comprehensive and flexible interactions within the VTT environment.

## Character

The `Character` type contains a game character, including its unique ID, name, attributes, and visual representation. It also supports optional fields for character biography and Game Master notes.

```typescript
type Character = {
 id: string;
 name: string;
 attributes: Record<string, any>;
 bio?: string;
 gmNotes?: string;
 token: Token;
 avatar: string;
}
```

The `character` type contains the following properties:

- `id`: A unique identifier for the character.
- `name`: The character's name.
- `attributes`: A record of various attributes such as strength, agility, etc.
- `bio`: An optional field for the character's biography.
- `gmNotes`: Optional notes intended for the Game Master.
- `token`: A `Token` object representing the character's token on the VTT.
- `avatar`: URL to the character's avatar image.

## Token

The `Token` type represents a character or object's visual token on the virtual tabletop. This type includes various properties related to the token's appearance, control, and interactions within the game environment.

```typescript
type Token = {
 id: string;
 layer: string;
 imgsrc: string;
 name: string;
 gmnotes: string
 controlledby: string;
 bar1_value: string;
 bar1_max: string;
 bar1_link: string;
 bar2_value: string;
 bar2_max: string;
 bar2_link: string;
 bar3_value: string;
 bar3_max: string;
 bar3_link: string;
 represents: string;
 aura1_radius: string;
 aura1_color: string;
 aura2_radius: string;
 aura2_color: string;
 tint_color: string;
 statusmarkers: string;
 light_radius: string;
 light_dimradius: string;
 light_angle: string;
 light_losangle: string;
 adv_fow_view_distance: string;
 sides: string;
 lastmove: string;
 lightColor: string;
 currentSide: number;
 night_vision_distance: number;
 bright_light_distance: number;
 low_light_distance: number;
 limit_field_of_vision_center: number;
 limit_field_of_vision_total: number;
 limit_field_of_night_vision_center: number;
 limit_field_of_night_vision_total: number;
 directional_bright_light_total: number;
 directional_bright_light_center: number;
 directional_low_light_total: number;
 directional_low_light_center: number;
 light_sensitivity_multiplier: number;
 dim_light_opacity: number;
 isdrawing: boolean;
 flipv: boolean;
 fliph: boolean;
 aura1_square: boolean;
 aura2_square: boolean;
 showname: boolean;
 showplayers_name: boolean;
 showplayers_bar1: boolean;
 showplayers_bar2: boolean;
 showplayers_bar3: boolean;
 showplayers_aura1: boolean;
 showplayers_aura2: boolean;
 playersedit_name: boolean;
 playersedit_bar1: boolean;
 playersedit_bar2: boolean;
 playersedit_bar3: boolean;
 playersedit_aura1: boolean;
 playersedit_aura2: boolean;
 light_otherplayers: boolean;
 light_hassight: boolean;
 has_bright_light_vision: boolean;
 has_night_vision: boolean;
 emits_bright_light: boolean;
 emits_low_light: boolean;
 has_limit_field_of_vision: boolean;
 has_limit_field_of_night_vision: boolean;
 has_directional_bright_light: boolean;
 has_directional_low_light: boolean;
 show_tooltip: boolean;
 lockMovement: boolean;
}
```

The `token` type contains the following properties:

- `id`: A unique identifier for the token.
- `layer`: Specifies the layer the token is on, such as "map" or "objects".
- `imgsrc`: URL to the token's image.
- `name`: Name of the token.
- `gmnotes`: Notes for the Game Master about the token.
- `controlledby`: ID of the player controlling the token.
- `bar1_value`: Current value of the first status bar.
- `bar1_max`: Maximum value of the first status bar.
- `bar1_link`: Link to the attribute the first bar represents.
- `bar2_value`: Current value of the second status bar.
- `bar2_max`: Maximum value of the second status bar.
- `bar2_link`: Link to the attribute the second bar represents.
- `bar3_value`: Current value of the third status bar.
- `bar3_max`: Maximum value of the third status bar.
- `bar3_link`: Link to the attribute the third bar represents.
- `represents`: The character ID this token represents.
- `aura1_radius`: Radius of the first aura.
- `aura1_color`: Color of the first aura.
- `aura2_radius`: Radius of the second aura.
- `aura2_color`: Color of the second aura.
- `tint_color`: Tint color applied to the token.
- `statusmarkers`: Status markers applied to the token.
- `light_radius`: Radius of the light the token emits.
- `light_dimradius`: Radius of the dim light the token emits.
- `light_angle`: Angle of the light emission.
- `light_losangle`: Line of sight angle.
- `adv_fow_view_distance`: Distance the token can see in advanced fog of war.
- `sides`: Number of sides for multi-sided tokens.
- `lastmove`: Coordinates of the last move.
- `lightColor`: Color of the light emitted by the token.
- `currentSide`: Current side displayed for multi-sided tokens.
- `night_vision_distance`: Distance for night vision.
- `bright_light_distance`: Distance for bright light vision.
- `low_light_distance`: Distance for low light vision.
- `limit_field_of_vision_center`: Center limit for the field of vision.
- `limit_field_of_vision_total`: Total limit for the field of vision.
- `limit_field_of_night_vision_center`: Center limit for night vision.
- `limit_field_of_night_vision_total`: Total limit for night vision.
- `directional_bright_light_total`: Total distance for directional bright light.
- `directional_bright_light_center`: Center distance for directional bright light.
- `directional_low_light_total`: Total distance for directional low light.
- `directional_low_light_center`: Center distance for directional low light.
- `light_sensitivity_multiplier`: Multiplier for light sensitivity.
- `dim_light_opacity`: Opacity of the dim light.
- `isdrawing`: Indicates if the token is a drawing.
- `flipv`: Indicates if the token is flipped vertically.
- `fliph`: Indicates if the token is flipped horizontally.
- `aura1_square`: Indicates if the first aura is square.
- `aura2_square`: Indicates if the second aura is square.
- `showname`: Show the token's name.
- `showplayers_name`: Show the name to players.
- `showplayers_bar1`: Show the first bar to players.
- `showplayers_bar2`: Show the second bar to players.
- `showplayers_bar3`: Show the third bar to players.
- `showplayers_aura1`: Show the first aura to players.
- `showplayers_aura2`: Show the second aura to players.
- `playersedit_name`: Allow players to edit the name.
- `playersedit_bar1`: Allow players to edit the first bar.
- `playersedit_bar2`: Allow players to edit the second bar.
- `playersedit_bar3`: Allow players to edit the third bar.
- `playersedit_aura1`: Allow players to edit the first aura.
- `playersedit_aura2`: Allow players to edit the second aura.
- `light_otherplayers`: Light is visible to other players.
- `light_hassight`: Token has sight.
- `has_bright_light_vision`: Token has bright light vision.
- `has_night_vision`: Token has night vision.
- `emits_bright_light`: Token emits bright light.
- `emits_low_light`: Token emits low light.
- `has_limit_field_of_vision`: Token has a limited field of vision.
- `has_limit_field_of_night_vision`: Token has a limited night vision.
- `has_directional_bright_light`: Token has directional bright light.
- `has_directional_low_light`: Token has directional low light.
- `show_tooltip`: Show tooltip for the token.
- `lockMovement`: Lock the token's movement.

## RollResults

The `RollResults` type details the outcomes of dice rolls, including the expression used, individual dice results, and the final computed result. This type is essential for handling and displaying roll results in the game.

```typescript
type RollResults = {
 [name: string]: {
 expression: string;
 rollName: string;
 results: {
 expression: string;
 dice?: number[];
 result: number;
 rolls?: {
 sides: number;
 dice: number;
 results: number[];
 }[];
 };
 };
}
```

The `RollResults` type contains the following properties:

- `expression`: The dice roll formula.
- `rollName`: The name given to this roll.
- `results`: An object containing the roll results.
  - `expression`: The formula used for the roll.
  - `dice`: An optional array of the dice rolled.
  - `result`: The final result of the roll.
  - `rolls`: Optional detailed results of each dice rolled.
    - `sides`: Number of sides on the dice.
    - `dice`: Number of dice rolled.
    - `results`: Results of the individual dice rolls.

## convertLegacyMacroAttributesArgs

The `convertLegacyMacroAttributesArgs` type defines the arguments required for converting legacy macro attributes. This type includes the attribute name, character ID, and the character object itself.

```typescript
type convertLegacyMacroAttributesArgs = {
 attribute: string;
 characterId: string;
 character: Character;
}
```

The `convertLegacyMacroAttributesArgs` type contains the following properties:

- `attribute`: The name of the attribute to be converted.
- `characterId`: The unique identifier of the character.
- `character`: The `Character` object containing the character's data.

These types control interaction with character data, tokens, roll results, and handling legacy macro attributes, making the SDK flexible for various use cases.