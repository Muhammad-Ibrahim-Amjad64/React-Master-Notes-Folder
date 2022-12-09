;Program to print two sting with enter key
dosseg
.model small
.stack 100h
.data
name1 db 'Nabeel$'
name2 db 'Ibrahim$'

.code
main proc
mov ax,@data
mov ds,ax

mov dx,offset name1        ;print nabeel 
mov ah,9
int 21h


mov dx,10         ;enter new line
mov ah,2
int 21h
mov dx,13
mov ah,2
int 21h





mov dx,offset name1              ;print ibrahim ustazzz
mov ah,9
int 21h



mov ah,4ch
int 21h

main endp
end main 


