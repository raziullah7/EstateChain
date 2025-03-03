using AutoMapper;
using Domain.Entities;
using Infrastructure.Persistence;
using MediatR;

namespace Application.Properties.Commands;

public class EditProperty
{
    public class Command : IRequest
    {
        public required Property Property { get; set; }
    }
    
    public class Handler(EstateChainDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            // using coalesce operator to check for null
            var property = await context.Properties
                .FindAsync([request.Property.Id], cancellationToken)
                ?? throw new Exception("Property not found");
            
            // making edits and save
            mapper.Map(request.Property, property);
            await context.SaveChangesAsync(cancellationToken);
        }
    }
}