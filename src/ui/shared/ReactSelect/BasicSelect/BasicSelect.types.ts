import { GroupBase, Props } from "react-select";

// export interface IBasicSelectProps<
//     OptionType extends OptionProps,
//     IsMulti extends boolean = false,
//     GroupType extends GroupProps<OptionType> = GroupProps<OptionType>
// > { }

export type IBasicSelectProps<Option, IsMulti extends boolean, Group extends GroupBase<Option> = GroupBase<Option>> = Props<
    Option,
    IsMulti,
    Group
>