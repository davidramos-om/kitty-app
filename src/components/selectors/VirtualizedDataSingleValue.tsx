import { createContext, HTMLAttributes, ReactChild, useState, forwardRef, useContext, useRef, useEffect, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListSubheader from '@mui/material/ListSubheader';
import Popper from '@mui/material/Popper';
import { useTheme, styled } from '@mui/material/styles';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import Typography from '@mui/material/Typography';

const LISTBOX_PADDING = 8;

function renderRow(props: ListChildComponentProps) {
    const { data, index, style } = props;
    const dataSet = data[ index ];
    const inlineStyle = {
        ...style,
        top: (style.top as number) + LISTBOX_PADDING,
    };

    if (dataSet.hasOwnProperty('group')) {
        return (
            <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
                {dataSet.group}
            </ListSubheader>
        );
    }

    return (
        <Typography component="li" {...dataSet[ 0 ]} noWrap style={inlineStyle}>
            {dataSet[ 1 ]}
        </Typography>
    );
}

const OuterElementContext = createContext({});

const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
    const outerProps = useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
    const ref = useRef<VariableSizeList>(null);
    useEffect(() => {
        if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
        }
    }, [ data ]);
    return ref;
}

// Adapter for react-window
const ListboxComponent = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLElement>
>(function ListboxComponent(props, ref) {

    const { children, ...other } = props;
    const itemData: ReactChild[] = [];
    (children as ReactChild[]).forEach(
        (item: ReactChild & { children?: ReactChild[] }) => {
            itemData.push(item);
            itemData.push(...(item.children || []));
        },
    );

    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
        noSsr: true,
    });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = (child: ReactChild) => {
        if (child.hasOwnProperty('group')) {
            return 48;
        }

        return itemSize;
    };

    const getHeight = () => {
        if (itemCount > 8) {
            return 8 * itemSize;
        }
        return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
        <div ref={ref}>
            <OuterElementContext.Provider value={other}>
                <VariableSizeList
                    itemData={itemData}
                    height={getHeight() + 2 * LISTBOX_PADDING}
                    width="100%"
                    ref={gridRef}
                    outerElementType={OuterElementType}
                    innerElementType="ul"
                    itemSize={(index) => getChildSize(itemData[ index ])}
                    overscanCount={5}
                    itemCount={itemCount}
                >
                    {renderRow}
                </VariableSizeList>
            </OuterElementContext.Provider>
        </div>
    );
});


const StyledPopper = styled(Popper)({
    [ `& .${autocompleteClasses.listbox}` ]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0,
        },
    },
});


type Props = {
    options: string[];
    value: string;
    label: string;
    disabled?: boolean;
    error?: boolean;
    size?: 'small' | 'medium';
    variant?: 'standard' | 'outlined' | 'filled';
    helperText?: string | false | undefined | string[];
    showSearchMore?: boolean;
    fullWidth?: boolean;
    getOptionLabel?: (value: any) => any,
    onChange: (value: string) => any;
    onSearchMore?: (keyword: string) => any;
}

export default function VirtualizedSingleAutoComplete(
    {
        value = '', disabled = false, error = false, label, variant = 'outlined',
        helperText, options, size = 'medium', showSearchMore = false, fullWidth = true,
        onChange, onSearchMore, getOptionLabel
    }: Props) {

    const [ open, setOpen ] = useState(false);
    const textRef = useRef<HTMLInputElement>();
    const autoCompleteRef = useRef<HTMLInputElement>();

    const handleSearchMore = () => {
        if (onSearchMore)
            onSearchMore(textRef?.current?.value || '');
    }

    return (
        <Autocomplete
            id="virtualize-single-auto-completed"
            ref={autoCompleteRef}
            multiple={false}
            disablePortal={false}
            autoHighlight={true}
            fullWidth={fullWidth}
            disableListWrap
            disabled={disabled}
            clearOnBlur
            clearOnEscape
            freeSolo={false}
            openOnFocus={true}
            noOptionsText={
                <Typography>
                    No results
                    {showSearchMore && (
                        <Fragment>
                            <br />
                            <b onClick={handleSearchMore} style={{ cursor: 'pointer' }} >Search more</b>
                        </Fragment>
                    )}
                </Typography>}
            size={size}
            PopperComponent={StyledPopper}
            ListboxComponent={ListboxComponent}
            options={options}
            value={value}
            renderOption={(props, option) => [ props, option ]}
            renderGroup={(params) => params}
            style={{ width: "100%" }}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onChange={(event: any, opt: any) => {
                if (onChange) {
                    onChange(opt);
                }
                setOpen(false);
            }}
            getOptionLabel={(option) => {
                return open ? option : (getOptionLabel ? getOptionLabel(option) : option)
            }}
            renderInput={(params) => {
                return (
                    <TextField
                        {...params}
                        key={params.id}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // trip : disable autocomplete and autofill
                        }}
                        fullWidth={fullWidth}
                        autoComplete="off"
                        error={error}
                        label={label}
                        helperText={helperText}
                        InputLabelProps={{ shrink: true }}
                        variant={variant}
                        inputRef={textRef}
                    />
                )
            }}
        />
    );
}
